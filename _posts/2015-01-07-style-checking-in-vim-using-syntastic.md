---
title: Style Checking in VIM using Syntastic
date:  2015-01-07
tags:  VIM, quick, tutorial
---

I'm a big fan of having a consistent style in my code. It greatly increases the
readability of the code, thereby reducing mental compilation time. By reducing
mental compilation time we are actually increasing developer efficiency.

Maintaining a consistent style without the help of a syntax-checker/style-linter
can be tedious, and draws your focus away from the code. You begin to think
about things like: "What is the proper style for this? Will this actually
compile?" You may end up Googling for an answer or attempt to run your code
manually. Both of these I consider to be unneccesary context switches, as they
disturb your focus on the _actual_ code.

Enter [Syntastic](https://github.com/scrooloose/syntastic).

Syntastic will automatically check your code as you are writing it. It is a
feature found in most IDEs, but does not come with Vanilla VIM. Sadly, I see
many new VIMmers who are unaware this even exists!

## Installation

1. Toss this in your ~/.vimrc:

  ```vim
  " Install the plugin (if you are using Vundle)
  Plugin 'scrooloose/syntastic'

  " Mark syntax errors with :signs
  let g:syntastic_enable_signs=1

  " Do not automatically jump to the error when saving the file
  " Jump feature is annoying to me as it automatically moves the cursor
  let g:syntastic_auto_jump=0

  " Show the error list automatically
  " Allows you to easily navigate the quick fix list
  let g:syntastic_auto_loc_list=1

  " This is where the magic happens. Chain together different style checkers
  " in order to check for both style flaws and syntax errors.
  " Syntax checkers: https://github.com/scrooloose/syntastic/wiki/Syntax-Checkers
  let g:syntastic_ruby_checkers=['rubocop', 'mri']
  let g:syntastic_python_checkers=['pep8', 'pylint', 'python']
  let g:syntastic_javascript_checkers=['jshint']
  let g:syntastic_scala_checkers=['scalac', 'scalastyle']
  ```

2. Now, in order to use some of these style checkers, you need to install the
packages to make them work. Given my ~/.vimrc, I would run this command:

  ```bash
  $ gem install rubocop
  $ pip install pylint pep8
  $ npm install -g jshint
  $ brew install scalastyle
  ```

You are ready to go. I will leave it as an exercise to the reader to configure
their style linters to enforce the style they prefer. I have a few set already
in my [Dotfiles](https://github.com/ianks/yadr-alt) if you are interested.
