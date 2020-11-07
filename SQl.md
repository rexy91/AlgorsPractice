# Ruby On Rails basic associations (Active Record ORM):

- Mod 1 challenge
We have three models: `Restaurant`, `Customer`, and `Review`.

For our purposes, a `Restaurant` has many `Reviews`, a `Customer` has many `Review`s, and a `Review` belongs to a `Customer` and to a `Restaurant`.

Relations:
Restaurant -> Reviews <- Customer
Restaruant has many customers thru reviews
Customer has many restaurants thru reviews
Review is the joiner.

