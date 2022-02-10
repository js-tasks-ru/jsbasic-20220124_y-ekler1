function makeFriendsList(friends) {
  let list = document.createElement('ul');

  friends.forEach(function(friend) {
    i = document.createElement('li');
    list.appendChild(i);

    i.innerHTML = `${friend.firstName} ${friend.lastName}`;
  });
   return list
}
