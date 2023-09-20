const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();


const user = [
  {
    name: "10x Academy",
    location: "Bengaluru",
    likes: 64,
    description: "Kick start your career",
    PostImage:
      "https://yt3.ggpht.com/a/AATXAJzziIN8YX9rC8ZEd85HJYmJ5hGFBdq0NVxxRQ=s900-c-k-c0xffffffff-no-rj-mo",
    date: [{ day }, { month }, { year }],
  },
  {
    name: "Neeraj",
    location: "Pune",
    likes: 30,
    description: "Sample Description",
    PostImage:
      "https://tse3.mm.bing.net/th?id=OIP.beIB6zqIG-Eu4SkSJFZEjQHaFj&pid=Api&P=0&h=180",
    date: [{ day }, { month }, { year }],
  },
  {
    name: "Rahul",
    location: "Hyderabad",
    likes: 30,
    description: "Sample Description for Post",
    PostImage:
      "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    date: [{ day }, { month }, { year }],
  },
];
