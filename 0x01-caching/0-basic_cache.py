#!/usr/bin/env python3

BaseCaching = __import__('base_caching').BaseCaching

"""
This module implements a basic caching system that allows storing and
retrieving items without any limit on the number of items stored.
"""


class BasicCache(BaseCaching):
    """
    BasicCache is a caching system that inherits from BaseCaching.
    It provides methods to add and retrieve items from the cache
    without any restrictions on size.
    """

    def put(self, key, item):
        """
        Add an item to the cache_data dictionary.
        This method stores the item associated with the given key if
        both key and item are not None.
        """
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """
        Retrieve an item from cache_data by key.
        This method returns the item associated with the given key if
        it exists, or None if the key is None or does not exist in
        the cache.
        """
        return self.cache_data.get(key) if key else None
