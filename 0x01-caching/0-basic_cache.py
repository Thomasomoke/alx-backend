#!/usr/bin/env python3
# 0-basic_cache.py

BasicCache = __import__('base_caching').BasicCache


class BasicCache(BaseCaching):
    """ BasicCache caching system without a limit """

    def put(self, key, item):
        """ Add an item to the cache_data dictionary """
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """ Retrieve an item from cache_data by key """
        return self.cache_data.get(key) if key else None
