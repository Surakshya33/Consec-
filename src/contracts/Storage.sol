// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Storage{

       string public name;
       uint public postCount= 0;
       mapping(uint=> Post) public  posts;
       struct Post{
        uint id;
        string content;
        uint tipAmount;
        address author;
}
       constructor() public {
        name="Consec Social Media";

       }

        function createPost(string memory  _content) public {
                //Increment of post Count
                postCount++;
                //Create the post
                posts[postCount]= Post(postCount,_content,0,msg.sender);
                }


//          function tipPost(uint _id) public payable {
//                 // Make sure the id is valid
//                 // require(_id > 0 && _id <= postCount);
//                 // Fetch the post
//                 Post memory _post = posts[_id];
//                 // Fetch the author
//                 address payable _author = _post.author;
//                 // Pay the author by sending them Ether
//                 address(_author).transfer(msg.value);
//                 // Incremet the tip amount
//                 _post.tipAmount = _post.tipAmount + msg.value;
//                 // Update the post
//                 posts[_id] = _post;
//                 // Trigger an event
//                 // emit PostTipped(postCount, _post.content, _post.tipAmount, _author);
//     }        

}