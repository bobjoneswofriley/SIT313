import faker from "faker";

const ArticleList=[
    {   'key': 1,
        'img': 'https://picsum.photos/125?random=1',
        'title':'First Article',
        'desc': 'This article revolves around this image',
        'author': faker.name.firstName()
    },
    {   'key': 2,
        'img': 'https://picsum.photos/125?random=2',
        'title':'Second Article',
        'desc': 'This article revolves around this image',
        'author': faker.name.firstName()
    },
    {   'key': 3,
        'img': 'https://picsum.photos/125?random=3',
        'title':'Third Article',
        'desc': 'This article revolves around this image',
        'author': faker.name.firstName()
    }
]

export default ArticleList