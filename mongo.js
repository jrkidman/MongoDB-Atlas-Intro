// Create a single blog post stored in a variable

const blogPosts =
{
    createdAt: "2022-03-22T10:36:37.176Z",
    title: "dicta",
    text: "Iusto et in et. Nulla accusantium fugit. Et qui dolorem inventore soluta et veritatis. Aut ut aut non laudantium eveniet suscipit odit. Sapiente sint nihil nihil sit et molestias. In nisi omnis quas et sed aut minus aperiam ea.\n \rLaudantium quo quisquam quae. Et et quas officia perspiciatis iusto sunt sunt eaque. Quidem sit voluptas deserunt sequi magni.\n \rEst est facere cumque ipsam omnis animi. Voluptatem magnam officiis architecto possimus. Quia similique aut eos qui. Quasi quae sed aliquam.",
    author: "Darren Abbott",
    id: "1",
}


// Add the single blog post contained in the variable to the database
db.posts.insertOne(blogPosts);

// Add multiple entries to the database as an array; accidentally ran this twice without commenting it out so I had 10 entries, 2 of each
db.posts.insertMany([
    {
        createdAt: "2022-03-22T15:16:56.285Z",
        title: "ducimus",
        text: "Placeat ea et fuga. Qui itaque quibusdam nam. Maxime nobis quam. Et laudantium sunt incidunt reiciendis.\n \rEarum aut sed omnis autem aliquam architecto corporis sint. Nostrum cumque voluptatem aperiam alias similique. Tenetur et esse omnis praesentium ipsum alias. Impedit rerum qui quia quaerat architecto mollitia est autem. Qui blanditiis earum et qui dolorum reprehenderit. Debitis est temporibus.\n \rEt nam sed. Corporis ut rerum. Ut qui dolore est dolorem ex.",
        author: "Luke Rogahn PhD",
        id: "2",
    },
    {
        createdAt: "2022-03-21T20:09:32.298Z",
        title: "quod",
        text: "Accusamus nisi eos. Tenetur earum tenetur nemo. Qui voluptas temporibus repellendus maxime. Ipsum optio voluptate enim nihil. Ea et dolorem. Omnis unde perspiciatis.\n \rUt odio eaque. Harum non placeat. Eveniet molestiae in cupiditate dolor doloremque rerum eligendi aut ab.\n \rMolestias eligendi et. Nemo velit natus autem numquam atque provident et nulla. In et dolores ad nihil. Delectus quis doloremque asperiores similique. Asperiores id nam vitae nobis labore autem. Dolor aperiam provident quia consectetur aut ut.",
        author: "Maryann Schneider",
        id: "3",
    },
    {
        createdAt: "2022-03-21T23:07:53.447Z",
        title: "ut",
        text: "Itaque necessitatibus repudiandae. Porro suscipit exercitationem qui atque. Perferendis suscipit debitis sint aut dignissimos nobis ut. Modi ea nihil est vel consequuntur voluptatem. In magnam delectus in eos reiciendis sit est enim eligendi. Sint dicta at.\n \rConsectetur aspernatur alias sed non explicabo blanditiis laborum fugit voluptate. Reiciendis iste aut sit natus qui et in ratione. Placeat qui in voluptatum autem nulla ratione. Commodi sit alias sint sapiente rem. Quia sapiente minus deleniti vitae.\n \rExercitationem numquam omnis maxime dolorum sed deserunt suscipit laudantium. Ad et autem voluptatem esse laudantium et. Id fuga accusamus est sapiente dicta.",
        author: "Dr. Lorenzo Anderson",
        id: "4",
    },
    {
        createdAt: "2022-03-22T15:14:39.819Z",
        title: "id",
        text: "Porro officia aliquid fugiat sed reprehenderit illo amet doloribus sed. Molestiae vero et. Quae voluptates dolores. Voluptatem facere fuga. Veniam perferendis illo ut sunt earum deleniti.\n \rIusto neque dolorem esse error. Saepe et quia ut corrupti. Autem repellendus similique dolorem sunt in ipsa perferendis. Et excepturi ut voluptatem deserunt accusantium dolores aperiam cum ut.\n \rDoloremque expedita sit et voluptatem unde libero. Numquam beatae sed repellat iusto doloribus fugit tenetur. Possimus et ut adipisci harum voluptatem provident consequatur. Corporis quo aut vel itaque blanditiis illum.",
        author: "Bobbie Dach",
        id: "5",
    },
])

// Use find to read one document
db.posts.find({ author: "Darren Abbott" })

// Updated the document with the author Darren Abbot to have the author name as my name.  This changed 2 docuents bc of my duplicates.
db.posts.updateOne({ author: "Darren Abbott" }, { $set: { author: "Jill K" } })

// Use updateMany to update all records with an id number >=3 to change the author name to "your mom".  This changed 6 documents bc of my duplicates.
db.posts.updateMany({ id: { $gte: "3" } }, { $set: { author: "Your Mom" } })
db.posts.find({})


//Now use deleteOne to delete my 5 multiple entries, querying them by _id
db.posts.deleteOne({ _id: ObjectId("628d080dfaf6c585075edd8d") })
// db.posts.find({})
db.posts.deleteOne({ "_id": ObjectId("628d080dfaf6c585075edd8e") })
// db.posts.find({})
db.posts.deleteOne({ "_id": ObjectId("628d080dfaf6c585075edd91") })
// db.posts.find({})
db.posts.deleteOne({ "_id": ObjectId("628d07bcfaf6c585075edd8a") })
// db.posts.find({})
db.posts.deleteOne({ "_id": ObjectId("628d080dfaf6c585075edd90") })
// db.posts.find({})




// Switch to second part of assignment, adding 50 documents and returning sorted by given field
const getPosts = (limit, skip, sortField, sortOrder, filterField, filterValue) => {

    const dLimit = limit ? limit : 50
    const dSkip = skip ? skip : 0
    const dSort = sortField && sortOrder ? { [sortField]: sortOrder } : {}
    const dFilter = filterField && filterValue ? { [filterField]: filterValue } : {}

    let dbResult = [];
    dbResult = db.blogs50.find(dFilter).limit(dLimit).skip(dSkip).sort(dSort).toArray();
    return dbResult
}
console.log(getPosts(5, "", "", "", "", ""))



//findPost(blogId) should return a single blog post given an ID
const findPostById = (blogId) => {
    return db.blogs50.find({ id: blogId }).toArray();
}
console.log(findPostById(2));



// * getPostsCollectionLength() should return a number representing the total length of the blog posts collection.
const getPostsCollectionLength = () => {
    return db.blogs50.count()
}
console.log(getPostsCollectionLength())


// * makePost(blogId, title, text, author, category) should create a new blog post in mongo. Remember you need to generate 
// and add a createdAt date, and a lastModified date to the post before inserting it into the collection. Additionally, blogId 
// should be calculated by taking the total length of blog posts in the database and adding 1 to it. Hint: use the 
// getPostsCollectionLength() function to quickly determine the current length of the collection.


const makePost = (title, text, author, category) => {
    const blogTitle = title ? title : "";
    const blogText = text ? text : "";
    const blogAuthor = author ? author : "";
    const blogCategory = category ? category : "";

    const newBlog = {
        createdAt: new Date(),
        title: blogTitle,
        text: blogText,
        author: blogAuthor,
        category: blogCategory,
        lastModified: new Date(),
        id: getPostsCollectionLength() + 1
    }
    return db.blogs50.insertOne(newBlog);
}

// makePost("poop", "poop", "poop", "poop")
// db.blogs50.find({})


// * updatePost(blogId, title, text, author, category) should find a post matching the id of blogId and then update the title, text, author and category fields with the inputted information. Remember, since lastModified is a representation of when the post was last updated (including creation), you will have to update lastModified to the current date and time as well.

const updatePost = (blogId, title, text, author, category) => {

    //find the blog to update
    const blogToUpdate = findPostById(blogId)[0];

    const blogTitle = title ? title : blogToUpdate.title;
    const blogText = text ? text : blogToUpdate.text;
    const blogAuthor = author ? author : blogToUpdate.author;
    const blogCategory = category ? category : blogToUpdate.category;

    const updatedBlog = {
        title: blogTitle,
        text: blogText,
        author: blogAuthor,
        category: blogCategory,
        lastModified: new Date(),
    }
    return db.blogs50.updateOne({id: blogId}, {$set: updatedBlog})
}

// updatePost(54, "poopy", "poopy", "poopy", "poopy")

// * deletePosts(blogIds) should take in an ARRAY of blogId's in the blogIds param. 
// The function should iterate through the array of blogId's and delete all the blog posts with matching id's. 

const postsToDelete = [55, 54, 53]

const deletePosts = (blogIdArray) => {
    for (let id of postsToDelete) {
        db.blogs50.deleteOne({id: id})
    }
}

deletePosts(postsToDelete)
// db.blogs50.find({})



// * Stretch Goal: 
//         * Iterate through the posts collection and generate a list of author names. Create a new collection in your blogs database called users 
//           (this collection should be on the same hierarchical level as the posts collection). For every author in the list do the following: 
//         * Create and insert a new user object into the users collection with the following fields: 
//             * firstName 
//             * lastName 
//             * userId - a unique id. It can be the same scheme as the posts id, a number representing the current length of the collection + 1
//             * email - should be the following format <firstName>.<lastName>@gmail.com, all lowercase letters, with no whitespace in the email
//               address.
//             * posts - should be a list of mongo OBJECTID's representing a list of every post that author has made. 
//             * E.G. if this post exists: 
//                 {
//                     "_id": new ObjectId("628d233e1505f82ea360a613")
//                     "createdAt": "2021-06-08T12:25:55.889Z",
//                     "title": "officia",
//                     "text": "Lorem Ipsum.",
//                     "author": "Jacqueline Hudson",
//                     "lastModified": "2022-05-24T00:55:08.105Z",
//                     "category": "dolores",
//                     "id": "2"
//                 }
//             Then the following user should be generated and inserted into the users collection:
//                 {
//                     "firstName": "Jacqueline"
//                     "lastName": "Hudson"
//                     "userId": "1"
//                     "email": "jacqueline.hudson@gmail.com"
//                     "posts": [new ObjectId("628d233e1505f82ea360a613")]
//                 }

