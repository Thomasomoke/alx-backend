#!/usr/bin/env python3

BaseCaching = __import__('base_caching').BaseCaching

"""
This module implements a basic caching system that allows storing items
"""


class BasicCache(BaseCaching):
    """
    BasicCache is a caching system that inherits from BaseCaching.
    """

    def put(self, key, item):
        """
        Add an item to the cache_data dictionary.
        """
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """
        Retrieve an item from cache_data by key.
        """
        return self.cache_data.get(key) if key else None
