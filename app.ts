//import {observable, of} from "rxjs";
//1.Array of Objects With Methods
type Person = {
    name: string;
    lname: string;
    greet: () => string; //<- RETURN TYPE IS STRING IF NOT RETUTN ANYTHING THEN IT WIIL BE VOID
};

const people: Person[] = [
    {
        name: "Bharti", lname: "Harinkhede",
        greet: () => {
            return "Hello!"; // return required
        }
    },
    {
        name: "Deep", lname: "Harinkhede",
        greet: () => {
            return "Hi!"
        }
    }

];


//...................................................ENDS HERE ..................................

//2. Nested type alias (object inside object)
type Address = {
    city: string;
    pincode: number;
};

type Employee1 = {
    name: string;
    address: Address;
};

const emp: Employee1 = {
    name: "Raj",
    address: { city: "Pune", pincode: 411001 }
};

//...................................................ENDS HERE ..................................

//3.
type Student = {
    id: number;
    name: string;
    age: number;
    gender: string;
    hobbies: string[];
    address: {
        city: string;
        pincode: number;
        geo: {
            lat: number;
            lng: number;

        };
    };
    subjects: {
        name: string;
        marks: number;
        teacher: {
            name: string;
            experience: number;
        };
    }[]
    attendance: number[];
    certifications: {
        title: string;
        year: number
        skills: string[]
    }[];
    isActive: boolean;

}
const students: Student[] = [
    {
        id: 1,
        name: "Bharti",
        age: 22,
        gender: "female",
        hobbies: ["Reading", "Coding", "Music"],
        address: {
            city: "Pune",
            pincode: 411001,
            geo: { lat: 18.5204, lng: 73.8567 }
        },
        subjects: [
            {
                name: "Math",
                marks: 95,
                teacher: { name: "Mr. Sharma", experience: 10 }
            },
            {
                name: "Science",
                marks: 90,
                teacher: { name: "Mrs. Gupta", experience: 12 }
            }
        ],
        attendance: [90, 95, 88, 92],
        certifications: [
            {
                title: "JavaScript Expert",
                year: 2024,
                skills: ["JS", "TS", "DOM"]
            }
        ],
        isActive: true
    }
];

//...................................................ENDS HERE ..................................


//4.

type order = {
    orderId: string;
    userId: number;
    status: string;
    items: {
        productId: number;
        name: string;
        quantity: number;
        price: number
        tags: string[]
    }[];
    payment: {
        method: string;
        paid: boolean;
        transactionId: string;
    };
    shipping: {
        addressLine: string;
        city: string;
        pincode: number;
        contactNumber: string;
    };
    totalAmount: number;
    discount: number;
    createdAt: string;
}


const orders: order[] = [
    {
        orderId: "ORD-1001",
        userId: 1,
        status: "shipped",
        items: [
            {
                productId: 101,
                name: "Laptop",
                quantity: 1,
                price: 50000,
                tags: ["electronics", "office"]
            },
            {
                productId: 102,
                name: "Mouse",
                quantity: 2,
                price: 800,
                tags: ["accessory"]
            }
        ],
        payment: {
            method: "card",
            paid: true,
            transactionId: "TXN123456"
        },
        shipping: {
            addressLine: "MG Road",
            city: "Pune",
            pincode: 411001,
            contactNumber: "9999999999"
        },
        totalAmount: 51600,
        discount: 200,
        createdAt: "2025-12-01T10:30:00Z"
    }
];


//...................................................ENDS HERE ..................................


//5.
type Lesson = {
    id: number;
    title: string;
    durationInMin: number;
    videoUrl: string;
};

type Module = {
    id: number;
    title: string;
    lessons: Lesson[];
};

type Course = {
    id: number;
    title: string;
    level: "beginner" | "intermediate" | "advanced";  // select only from these options
    category: string;
    tags: string[];
    instructor: {
        name: string;
        experience?: number;
        skills: string[];
    };
    modules: Module[];
    rating: number;
    studentsEnrolled: number;
    isPublished: boolean;
};

const courses: Course[] = [
    {
        id: 1,
        title: "TypeScript for Beginners",
        level: "beginner",
        category: "Programming",
        tags: ["TS", "JS", "Frontend"],
        instructor: {
            name: "Bharti",
            skills: ["Angular", "TypeScript", "RxJS"]
        },
        modules: [
            {
                id: 1,
                title: "Basics",
                lessons: [
                    {
                        id: 1,
                        title: "What is TypeScript?",
                        durationInMin: 15,
                        videoUrl: "https://example.com/1"
                    },
                    {
                        id: 2,
                        title: "Types & Interfaces",
                        durationInMin: 25,
                        videoUrl: "https://example.com/2"
                    }
                ]
            }
        ],
        rating: 4.8,
        studentsEnrolled: 1200,
        isPublished: true
    }
];

//...................................................ENDS HERE ..................................

//6.
type Employee = {
    id: number;
    name: string;
    role: string;
    skills: string[];
    salary: number;
};

type Department = {
    id: number;
    name: string;
    head: string;
    employees: Employee[];
};

type Company = {
    id: number;
    name: string;
    foundedYear: number;
    industry: string;
    locations: string[];
    departments: Department[];
    totalEmployees: number;
    isHiring: boolean;
};

const companies: Company[] = [
    {
        id: 1,
        name: "TechSoft",
        foundedYear: 2015,
        industry: "IT Services",
        locations: ["Pune", "Bangalore"],
        departments: [
            {
                id: 10,
                name: "Development",
                head: "Ankit",
                employees: [
                    {
                        id: 1,
                        name: "Bharti",
                        role: "Frontend Dev",
                        skills: ["Angular", "TypeScript", "HTML", "CSS"],
                        salary: 800000
                    }
                ]
            }
        ],
        totalEmployees: 150,
        isHiring: true
    }
];

//...................................................ENDS HERE ..................................

//7.
type CastMember = {
    actorName: string;
    characterName: string;
};

type CrewMember = {
    name: string;
    role: string;
};

type Rating = {
    source: string;
    value: number;
};

type Movie = {
    id: number;
    title: string;
    genre: string[];
    releaseYear: number;
    durationInMin: number;
    languages: string[];
    cast: CastMember[];
    crew: CrewMember[];
    ratings: Rating[];
    isTrending: boolean;
};

const movies: Movie[] = [
    {
        id: 1,
        title: "The TypeScript Story",
        genre: ["Tech", "Drama"],
        releaseYear: 2025,
        durationInMin: 120,
        languages: ["English", "Hindi"],
        cast: [
            { actorName: "Actor 1", characterName: "Dev" },
            { actorName: "Actor 2", characterName: "Tester" }
        ],
        crew: [
            { name: "Director 1", role: "Director" },
            { name: "Writer 1", role: "Writer" }
        ],
        ratings: [
            { source: "IMDB", value: 8.5 },
            { source: "RottenTomatoes", value: 92 }
        ],
        isTrending: true
    }
];

//8
type Author = {
    id: number;
    name: string;
    country: string;
};

type Book = {
    isbn: string;
    title: string;
    pages: number;
    publishedYear: number;
    author: Author;
    categories: Array<string>; //string[]
    availableCopies: number;
};

type Library = {
    id: number;
    name: string;
    city: string;
    books: Book[];
    membersCount: number;
    openHours: {
        open: string;
        close: string;
    };
};

const libraries: Library[] = [
    {
        id: 1,
        name: "City Library",
        city: "Pune",
        books: [
            {
                isbn: "123-ABC",
                title: "Mastering TypeScript",
                pages: 350,
                publishedYear: 2024,
                author: { id: 1, name: "John Doe", country: "USA" },
                categories: ["Programming", "Web"],
                availableCopies: 5
            }
        ],
        membersCount: 1000,
        openHours: { open: "09:00", close: "18:00" }
    }
];


//...................................................ENDS HERE ..................................

//9

type Like = {
    userId: number;
    userName: string;
};

type Share = {
    userId: number;
    platform: "whatsapp" | "facebook" | "twitter";
};

type SocialComment = {
    id: number;
    userId: number;
    userName: string;
    message: string;
    replies?: SocialComment[]; // nested comments
};

type SocialPost = {
    id: number;
    authorId: number;
    authorName: string;
    content: string;
    tags: string[];
    likes: Like[];
    comments: SocialComment[];
    shares: Share[];
    createdAt: string;
    isEdited: boolean;
};

const postsSocial: SocialPost[] = [
    {
        id: 1,
        authorId: 100,
        authorName: "Bharti",
        content: "Learning TypeScript is fun!",
        tags: ["typescript", "learning"],
        likes: [{ userId: 2, userName: "Raj" }],
        comments: [
            {
                id: 1,
                userId: 3,
                userName: "Neha",
                message: "Totally agree!",
                replies: [
                    {
                        id: 2,
                        userId: 100,
                        userName: "Bharti",
                        message: "Thank you",
                        replies: []
                    }
                ]
            }
        ],
        shares: [{ userId: 4, platform: "whatsapp" }],
        createdAt: "2025-12-01T12:00:00Z",
        isEdited: false
    }
];


//...................................................ENDS HERE ..................................

//10

//basic

let x : string = "100"
x= " ";

let userName : string = "erlkgv";
let flag : boolean = true;

let skills :string[] = ["js", "ts"]

let nums : Array<number> = [10, 20, 30]
