// Create a class StaffList.
// The class will manage a collection of staff members, where each member is uniquely identified by a name.
// The class must have the following methods.

// 1. add(name,age)
// Parameters string name and interger age passed to this function.
// If age is > 20, adds the member with the given name to the collection.
// Else if age is < = 20, it throws error with message 'staff member age must be greater than 20'
// If a member is in the collection, no other member with the same name will be added to the collection.

// 2.Remove(name):
// if the member with the given name is in the collection, it removes the member from the collection and returns true.
// Else if the member with the given name is not in the collection, does nothing and returns false.

// 3. getSize()
// returns the number of member in the collection.

class StaffList{
    constructor(){
        this.array = []
        this.length = 0
    }

    getAllStaff(){
        console.log(this.length)
    }

    add(name, age){
        console.log(this.array)
        if (age > 20 ){
            this.array.push(new StaffList(name))
            this.length += 1
        }
        else if( age <= 20){
            console.log('staff member age must be greater than 20')
        }
    }

    getSize(){
        console.log(this.length)
    }
}

let newStaffList = new StaffList();
newStaffList.add('yuho',25)
newStaffList.add('marco',25)
