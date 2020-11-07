
- self inside a instance method in a class, refers the a instance/Object

# select:
- return the all matching results. 
Customer.all.select do |customer_instance|
        condition
end

# map:
- return array of all matching results.

- Find all the customers with the same given name 
def self.find_all_by_given_name(name)
    Customer.all.map |customer_instance|
        customer.given_name == name
end
end

# each:
- each is just like a for loop, doesn't have to require conditions, but you can add statement/executions.

// Loop thru reviews, and push each review's resutrant instance into the resturants_array 
review.all.each |review|
    restaurants_array << review.resutrant
end
```rb
class Person
    self is the class.

    def self.all  # This will be a class method, self here is the class. 
    
    end

    def addUp  # This will be an instance method.
        # self inside this method, will be one instance.
    end
end
```