import path from "path";

const __dirname = path.resolve();

const books = [
    {
        title: "The Pirates of Antarctica",
        image: "https://book.oceanwp.org/wp-content/uploads/edd/2018/05/ships-450x450.jpg",
        price: "$4.98",
        desc: "The Pirates of Antarctica Of brilliant syntheses not a sunrise   ",
    },
    {
        title: "Planets and Your Life",
        image: "https://book.oceanwp.org/wp-content/uploads/edd/2018/05/sky-450x450.jpg",
        price: "$7.99",

        desc: "Treacle narky well be avin less of that taking the mick sorted it ",
    },
    {
        title: "Story of Love & Sacrifice",
        image: "https://book.oceanwp.org/wp-content/uploads/edd/2018/05/love-450x450.jpg",
        price: "$4.99",

        desc: "Treacle narky well be avin less of that taking the mick sorted it tosser bits  ",
    },
    {
        title: "Zoology of Madagascar",
        image: "https://book.oceanwp.org/wp-content/uploads/edd/2018/05/zoology-450x450.jpg",
        price: "$3.99",

        desc: "Zoology of Madagascar Pommy ipsum see a man about a dog treacle Geordie,",
    },
];

export const getbooks = (req, res) => {
    res.json([...books]);
};

export const editbooks = (req, res) => {
    books.push(req.body);
    res.json({ ...books });
};
export const addbookPage = (req, res) => {
    res.sendFile(path.join(__dirname, "src/public/Form.html"));
};
export const addbook = (req, res) => {
    const { title, desc, image } = req.body;
    console.log(title, desc, image);
    books.push({ title, image, desc });
    res.redirect("/");
};
