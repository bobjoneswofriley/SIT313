import faker from "faker";

const TutorialList=[
    {   'key': 1,
        'img': 'https://picsum.photos/125?random=5',
        'title':'First Tutorial',
        'desc': 'This tutorial revolves around this image',
        'author': faker.name.firstName()
    },
    {   'key': 2,
        'img': 'https://picsum.photos/125?random=6',
        'title':'Second Tutorial',
        'desc': 'This tutorial revolves around this image',
        'author': faker.name.firstName()
    },
    {   'key': 3,
        'img': 'https://picsum.photos/125?random=7',
        'title':'Third Tutorial',
        'desc': 'This tutorial revolves around this image',
        'author': faker.name.firstName()
    }
]

export default TutorialList