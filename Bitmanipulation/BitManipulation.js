class BitManipulation {
    
    static getBit(n, k) {
        return Number((BigInt(n) >> BigInt(k)) & 1n);
    }

    
    static setBit(n, k) {
        return Number((1n << BigInt(k)) | BigInt(n));
    }

    static clearBit(n, k) {
        return Number(BigInt(n) & ~(1n << BigInt(k)));
    }

    
    static toggleBit(n, k) {
        return Number(BigInt(n) ^ (1n << BigInt(k)));
    }

    
    static isPowerOfTwo(n) {
        if (n > 0 && (n & (n - 1)) === 0) {
            return true;
        }
        return false;
    }

    
    static countSetBits(n) {
        let count = 0;
        while (n > 0) {
            n = n & (n - 1);
            count++;
        }
        return count;
    }
}