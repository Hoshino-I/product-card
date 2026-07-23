import { commentsArr } from './comments.js';


commentsArr

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(num => num >= 5);

const cloth = ["Trousers", "Sweater", "Tshirt", "Socks", "Shorts"];

const hasSweater = cloth.includes("Sweater")

const reverseArray = (arr) => {
  arr.reverse()
}

const commentsFilter = commentsArr.filter(comment => {
  return comment.email.includes(".com");
});

const changePostId = (arr) => {
  return arr.map(comment => {
    if (comment.id <= 5) {
      return {...comment, postId: 2}
    } else {
      return {...comment, postId: 1}
    }
  });
}
const updatedComments = changePostId(commentsArr);

const filterUserKeys = (userId) => {
  return userId.map(comment => {
  return {
    id: comment.id, 
    name: comment.name}
  });
}
const shortComments = filterUserKeys(commentsArr);

const validateComments = (invalid) => {
  return invalid.map(comment => {
    return {
      ...comment,
      isInvalid: comment.body.length > 180 ? true : false
    };
  })
};
const validatedCommentsList = validateComments(commentsArr);

const emailList = commentsArr.reduce((acc, item) => {
  acc.push(item.email);
  return acc;

}, []);

const emailListMap =  commentsArr.map(comment => comment.email);
const emailsString = commentsArr.toString();
const emailsJoin = commentsArr.join(", ")


reverseArray(numbers);
reverseArray(cloth);
console.log(filteredNumbers);
console.log(hasSweater)
console.log(numbers);
console.log(cloth);
console.log(commentsFilter);
console.log(updatedComments);
console.log(shortComments);
console.log(validatedCommentsList);
console.log(emailList);
console.log(emailListMap);
console.log(emailsString);
console.log(emailsJoin);