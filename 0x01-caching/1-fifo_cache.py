#!/usr/bin/env python3
# 1-fifo_cache.py

FIFOCache = __import__('base_caching').FIFOCache


class FIFOCache(BaseCaching):
    """ FIFO Cache that inherits from BaseCaching """

    def __init__(self):
        """ Initialize the cache """
        super().__init__()
        self.cache_order = []  # Track cache keys order

    def put(self, key, item):
        """ Add item to the cache with FIFO policy """
        if key is not None and item is not None:
            if key in self.cache_data:
                # Update order for existing key
                self.cache_order.remove(key)
            elif len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                # Remove oldest item if cache is full
                oldest_key = self.cache_order.pop(0)
                del self.cache_data[oldest_key]
                print(f"DISCARD: {oldest_key}")

            # Add item to cache and update order
            self.cache_data[key] = item
            self.cache_order.append(key)

    def get(self, key):
        """ Retrieve item by key from the cache """
        return self.cache_data.get(key) if key else None
