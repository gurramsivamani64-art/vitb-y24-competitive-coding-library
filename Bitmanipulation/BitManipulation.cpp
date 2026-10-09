#include <iostream>

class BitManipulation {
public:
    
    static long getBit(long n, int k) {
        return ((n >> k) & 1L);
    }

    
    static long setBit(long n, int k) {
        n = ((1L << k) | n);
        return n;
    }

   
    static long clearBit(long n, int k) {
        n = (n & ~(1L << k));
        return n;
    }

  
    static long toggleBit(long n, int k) {
        n = (n ^ (1L << k));
        return n;
    }

   
    static bool isPowerOfTwo(long n) {
        if (n > 0 && (n & (n - 1)) == 0) {
            return true;
        }
        return false;
    }

    
    long countSetBits(long n) {
        int count = 0;
        while (n > 0) {
            n = n & (n - 1);
            count++;
        }
        return count;
    }
};