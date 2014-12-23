---
title: "2014: Year of Hackathons"
---

This year I attended two hackathons. The first one was the [Money 20/20
hackathon](http://www.money2020.com/money2020-hackathon) and the second was the
[Coin-orado hackathon](https://www.youtube.com/watch?v=FkK0PabP2to).

> The Money20/20 Hackathon brings together hundreds of talented developers,
> designers and entrepreneurs to compete over 24 hours by building amazing
> FinTech applications using APIs, SDKs and other tools from todays biggest
> innovators in Payments and Financial ServicesA

A hackathon is a short 1-3 day event where people gather in groups and attempt to
build a bare-minimum product idea. At the end of the event, the groups 'pitch'
their idea to a panel of judges.

I met up with a few friends in Vegas for the event with no concrete plans in
mind, only ideas. The only thing I *knew* that I wanted to do was something
involving [Bitcoin](https://bitcoin.org/en/). In my opinion, Bitcoin is the
single most interesting developing technology at the moment, and has huge
potential in the world of financial services and contracts. So this was a given.

We spent the first 3-4 hours harvesting an idea to leverage bitcoin's
multi-signature wallet functionality to create an escrow service. Our escrow
service was marketed as a friendly bookie which would escrow money when you make
a bet with a friend. However, due to multi-signature bitcoin addresses, it was
*impossible* for the bookie to steal your money! We call our service Bitcoin
Bookie.

The process goes something like this, with many details being left out for the
sake of explanation:

  1. Alice and Bob wish to make a friendly wager on a game.
  2. Alice and Bob send their *public* keys to our service.
  3. We take Alice, Bob, and our (Bitcoin Bookie) public addresses, and create
  a shared wallet. This shared wallet contains a script that states that in
  order for money to be spent out of this wallet, 2-of-3 people must *sign* off
  on the transaction.
  4. Alice and Bob both create half-complete transactions to send the bitcoin
  to themselves. The reason I call them half-complete is because without one
  more person signing off on the transaction, the bitcoin will never actually
  be sent.
  5. Bitcoin Bookie then waits for the game to complete, and then completes the
  2-of-3 transaction which sends the bitcoin to the rightful winner.

We managed to complete a working demo for this application using a combination
of Ruby on Rails and client-side javascript.

After 24 hours of blood, sweat and caffeine, we managed to make it to the final
pitching round. They called our name, and with no sleep we had to pitch our idea
to a panel of renowned figures in the financial industry and hundreds of peers.
It was a bit intimidating, but the rush of it all kept me from feeling anxious
about presenting. We pitched our idea, and even pulled off a live-demo without a
hitch. That was lucky.

After some deliberation, the judges awarded us a top 10 prize out of over 100
teams! What an honor.

![prize](/images/bitcoin-bookie-win.jpg)

For the Coin-orado hackathon we build a web app which uses bitcoin wallets as a
honeypot to incentivize hackers to reveal that your computer has been
compromised. Essentially, we load your computer with some small bitcoin wallets
and wait for someone to spenf the money. [Here is a video of our
pitch](https://www.youtube.com/watch?v=CHumoxDITwA).

The interesting thing about hackathons is that they give you an excuse to put
all real-world responsibilities on hold. This gives you the opportunity to give
ideas the hyper-focus necessary to bring them from mere thoughts into fruition.

There are some inherent problems with hackathons I think. Firstly, they
encourage you to ignore best practices due to time constraints. No one I have
met is writing tests or heavily focusing on code architecture and readability in
hackathons. It would be too unproductive. Hackathon culture can also be somewhat
taxing physically. Staying up all night and drinking coffee causes a... unique
style of hangover.

That being said, I think the good far outweighs the bad. For all the bad design
decisions you make along the way, you spend invaluable time collaborating and
hashing out useful product ideas.

I learned it is important to always remember that the goal of a hackathon is not
to walk away with a production ready product, but to be able to effectively
communicate and present your idea to a panel. Having a working demo can be very
useful for this, but it's not the most important part.

I would like to make a special shoutout to [Chain.com](https://chain.com) for
their help throughout both hackathons. They make developing bitcoin applications
exponentially simpler and effective. They flew out employees to both
hackathons who got down and dirty helping people use their API. On top of that,
they have *incredible* documentation for their API, which is the most important
aspect of an API.
