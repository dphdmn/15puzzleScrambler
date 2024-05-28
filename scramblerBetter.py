import random

def getScramble(n):
    g = n * n - 1
    arr = list(range(1, g + 1))
    parity = False
    for i in range(g - 2):
        t = random.randint(i, g - 1)
        if i != t:
            parity = not parity
        arr[i], arr[t] = arr[t], arr[i]
    if parity:
        arr[g - 2], arr[g - 1] = arr[g - 1], arr[g - 2]
    arr.append(0)
    d, r = random.randint(0, n - 1), random.randint(0, n - 1)
    for _ in range(d):
        arr[g], arr[g - n] = arr[g - n], arr[g]
        g = g - n
    for _ in range(r):
        arr[g], arr[g - 1] = arr[g - 1], arr[g]
        g = g - 1
    return "/".join(" ".join(map(str, arr[i:i+n])) for i in range(0, len(arr), n))
  
