---
title: Quick and Dirty Github Cleaning
date: 2015-01-06
tags: Ruby, Github, tutorial
---


This semester I took a class that required us to fork a repo every week and make
a pull-request to turn in our assignments. Needless to say, my Github account
got pretty cluttered. Here's a quick and dirty way to clean out old repositories
you do not need.

First, you need to install the Github-API gem:
    `$ gem install github_api`

Now, add your code, and regex match whichever repos you want to remove. Or
simply add some conditional logic to manually catch them if they don't follow a
pattern.

```ruby
require 'github_api'

username = 'YOUR_USERNAME'
password = 'YOUR_PASSWORD'
github = Github.new basic_auth: "#{username}:#{password}"

github.repos.list.each do |repo|
  if repo.name =~ /whatever-regex-you-want-.*/
    begin
      puts github.repos.delete user: username, repo: repo.name
    rescue
      puts $!.message
    end
  end
end
```
