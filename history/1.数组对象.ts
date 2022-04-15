type FriendList = {
    count: number,
    friends: {
        firstName: string,
        lastName: string
    }[]
}
let friend: FriendList = {
    count: 2,
    friends: [
        {
            firstName: 'Tim',
            lastName: 'cook'
        },
        {
            firstName: 'Tim',
            lastName: 'cook'
        }
    ]
}

type FriendArray = FriendList['friends']
// 等价于
// type Friends = {
//   firstName: string;
//   lastName: string;
// }[];

type FriendObject = FriendArray[number]
// 等价于
// type Friend = {
//   firstName: string;
//   lastName: string;
// };