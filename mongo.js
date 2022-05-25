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
db.posts.insertOne(blogPosts)

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
db.posts.find({
    author: "Darren Abbott"
})

// Updated the document with the author Darren Abbot to have the author name as my name.  This changed 2 docuents bc of my duplicates.
db.posts.updateOne({
    author: "Darren Abbott"
}, {
    $set: {
        author: "Jill K"
    }
})

// Use updateMany to update all records with an id number >=3 to change the author name to "your mom".  This changed 6 documents bc of my duplicates.
db.posts.updateMany({
    id: {
        $gte: "3"
    }
}, {
    $set: {
        author: "Your Mom"
    }
})
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
const getPosts = (limit = 50, skip = 0, sortField, sortOrder, filterField, filterValue) => {

    const dSort = sortField && sortOrder ? { [sortField]: sortOrder } : {}
    const dFilter = filterField && filterValue ? { [filterField]: filterValue } : {}

    let dbResult = [];
    dbResult = db.blogs50.find(dFilter).limit(limit).skip(skip).sort(dSort).toArray();
    return dbResult
}

console.log(getPosts(5, "", "", "", "", ""))

