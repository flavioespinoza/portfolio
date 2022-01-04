#!/usr/bin/python
# -*- coding: utf-8 -*-

# linear O(n) - brute force


def indexEqualsValueSearch1(arr):
    for i in xrange(len(arr)):
        if i == arr[i]:
            return i
    return -1


# O(log(N))

def indexEqualsValueSearch(arr):
    lo = 0
    hi = len(arr) - 1

    while lo <= hi:
        md = (lo + hi) / 2
        if arr[md] < md:
            lo = md + 1
        elif arr[md] == md and (md == 0 or arr[md - 1] < md - 1):
            return md
        else:
            hi = md - 1

    return -1


print indexEqualsValueSearch([
    -5,
    0,
    2,
    3,
    10,
    29,
    ])
