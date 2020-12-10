- array.sort()
    - O(n^2) for 10 or fewer items, space O(1)
    - O(nlog(n)) for longer, space O(logn)
    


# Space complixity:
    - two seperate array that might have n elements.
    - Should be O(n), because like sequial for loops, they are executing symontanlously,(same time)
        so n + n = 2n => O(n)

    

# Rotate Array:

Rotate the array to the right by k steps:

Brute Force:
Time: O(n*k), because we need to move n elements k times, its n * k, not n * n.

If its nest for loop, where we need to loop thru n elements n time, then its n^2.

** Sometimes if space is O(1), and time is slow, we can safcarfice space for a faster solution. 
