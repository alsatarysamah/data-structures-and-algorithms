# Hashtables
<!-- Short summary or background information -->
[PR]()
a “Hash table” is a data structure that can be utilized to map keys to their specified values.
## Challenge
<!-- Description of the challenge -->
For the basic implementation of hash tables in JavaScript, you need to perform these three operations:

Firstly, create a class for the hash table.
Define a hash function.
Define a method for adding key-value pairs for the hash tables.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
set

O(1) space efficiency

O(n) time efficiency

get

O(1) space efficiency

O(n) time efficiency

keys

O(n) space efficiency

O(n) time efficiency

contain

O(1) space efficiency

O(n) time efficiency

hash

O(1) space efficiency

O(n) time efficiency

## API
<!-- Description of each method publicly available in each of your hashtable -->


**set**

Arguments: key, value

Returns: nothing

This method should hash the key, and set the key and value pair in the table, handling collisions 
as needed.

Should a given key already exist, replace its value from the value argument given to this method.

**get**

Arguments: key

Returns: Value associated with that key in the table

**contains**

Arguments: key

Returns: Boolean, indicating if the key exists in the table already.

**keys**

Returns: Collection of keys

**hash**

Arguments: key

Returns: Index in the collection for that key