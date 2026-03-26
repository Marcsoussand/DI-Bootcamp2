class Person {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Student extends Person {
    protected studentId: string;
    constructor(
        ssn: string,
        firstName: string,
        lastName: string,
        studentId: string
    ) {        super(ssn, firstName, lastName);
        this.studentId = studentId;
    }
}

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName, jobTitle);
  }

   describe(): string {
    return super.describe() + ` I'm a ${this.jobTitle}.`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(
    firstName: string,
    lastName: string,
    jobTitle: string,
    department: string
  ) {
    super(firstName, lastName, jobTitle);
    this.department = department;
  }
   describe(): string {
    return super.describe() + ` I manage the ${this.department} department.`;
  }
}