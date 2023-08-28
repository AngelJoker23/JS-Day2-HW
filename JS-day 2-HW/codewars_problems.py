## CodeWars Problems and Solutions in Python ## 
## Problem/Solution #1 -- Stringy Strings -- 8kyu
## Create a function stringy thats size and returns a string of alternating 1s and 0s. 
## The string should start with 1. For example, a string with size 6 should return '101010'. 
## A string with size 4 should return '1010' and a string with size 12 should return '101010101010'. 
## Size will always be positive and will only use whole numbers. 

def stringy(size):
    return("10" * size)[:size]

## Problem/Solution #2 -- Cats and Shelves -- 7kyu
## Infinite number of shelves are arranged one above another in a staggered fashion. 
## The cat can jump either one or three shelves at time: 
## From shelf i to shelf i+1 or i+3. Also, the cat CAN NOT climb on the shelf directly above its head. 

## Input: Start and finish shelf numbers (always positive integers, finish no smaller than start). 
## Task: Find the minimum number of jumps to go from start to finish. 

def cats_and_shelves(n,m):
    if n == 0:
        return 0 
    if m == 0:
        return 1 
    return min(cats_and_shelves(n-1, m), cats_and_shelves(n, m-1)) + 1

## Example: Start 1, Finish 5, Answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

## You Can't Code Under Pressure #1 -- 8kyu
## Code as fast as you can! You need to double the integer and return it. 
def double_integer(i):
    return i * 2