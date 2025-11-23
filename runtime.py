import random
import time

def place_randomly(matrix):

    n = len(matrix)
    m = len(matrix[0])

    positions = [(i, j) for i in range(n) for j in range(m)]

    chosen_positions = random.sample(positions, 6)

    # Place 1's
    for (i, j) in chosen_positions:
        matrix[i][j] = 1

    return matrix


def create_matrix(n, m):
    return [[0 for _ in range(m)] for _ in range(n)]


def run_benchmarks():
    sizes = [(100, 100), (500, 500), (1000, 1000), (2000, 2000), (5000, 5000)]
    results = []

    for (n, m) in sizes:
        matrix = create_matrix(n, m)
        start = time.time()
        place_randomly(matrix)
        end = time.time()
        elapsed = end - start
        results.append((n, m, elapsed))
        print(f"{n}x{m} -> {elapsed:.6f} seconds")

run_benchmarks()