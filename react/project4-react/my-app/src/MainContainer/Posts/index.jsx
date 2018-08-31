import React from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';
import CreateComment from '../Comments/AddComment';

import Comments from '../Comments.js';
import EditPostModal from '../EditPostModal';
import EditCommentModal from '../../EditCommentModal'





const Posts = (props) => {

  const postList = props.posts.map((post, i) => {
    // console.log(post, ' post id')

    console.log(props.comments[0], ' this is props comments in Posts');
    return (



      <Col className="column-posts" xs="6" sm="4">
        <Card className="card-deck" key={post.id}>
          <CardBody>
            <CardTitle>
              <h3 className="blog-title"><a href="../PostShowPage/PostShowPage.jsx"></a>{post.title}</h3>
            </CardTitle>
            <CardSubtitle>
              <div key={post.id}>
                <h6 className="blog-date">{post.date}</h6>
              </div>
            </CardSubtitle>
          </CardBody>
          <CardImg className="blog-pic" top width="auto" src={post.img_url} alt="" />
          <CardBody>

            <CardText className="blog-body">
              {post.body}
            </CardText>
            <span className="center-post-btns">
              <EditPostModal
                closeAndEdit={props.closeAndEdit}
                handleFormChange={props.handleFormChange}
                postToEdit={post}
                showModal={props.showModal}
              />

              <button className="btn btn-danger btn-sm delete-btn" onClick={props.deletePost.bind(null, post.id)}>Delete Post</button>
            </span>
          </CardBody>
          <CreateComment postID={'http://localhost:8000/api/posts/' + post.id + '/'} addComment={props.addComment} />

          <Comments
            postID={post.id}
            comments={props.comments}
            deleteComment={props.deleteComment}

            showCommentModal={props.showCommentModal}
            closeAndEditComment={props.closeAndEditComment}
            commentToEdit={props.commentToEdit}
            handleCommentFormChange={props.handleCommentFormChange}
          />
        </Card>
      </Col>
    )
  })

  return (

    <div>
      <br></br>
      <div className="card-columns card-margin1">
        <div className="card">
          <img className="card-img-top" src="https://i.imgur.com/bcQFNGR.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Join us for some fun on August 31 at 2 pm!</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus iaculis felis ac ultricies. Curabitur faucibus erat sollicitudin nibh accumsan, et varius leo hendrerit. Vestibulum vel iaculis nibh. Aliquam quis eros est. Cras in tincidunt enim. Quisque venenatis, metus nec ornare fermentum, erat augue maximus augue, at ultricies felis ante lobortis mi. Phasellus sit amet sagittis massa. </p>
          </div>
        </div>

        {/* <div className="card p-3 card-margin2">
          <blockquote className="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div> */}

        <div className="card card-margin3">
          <img className="card-img-top" src="https://i.imgur.com/pL7KmrT.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Tina Smith and friends Graduated!</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus iaculis felis ac ultricies. Curabitur faucibus erat sollicitudin nibh accumsan, et varius leo hendrerit. </p>
            <p className="card-text"><small className="text-muted">Last updated 24hrs ago</small></p>
          </div>
        </div>

        <div className="card bg-black text-black text-center p-3 card-margin4">
          <blockquote className="blockquote mb-0">
            <p>The best view comes after the hardest climb.</p>
            <footer className="blockquote-footer">
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div className="card card-margin8">
          <div className="card-body">
            <h5 className="card-title">HELP WANTED!</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus iaculis felis ac ultricies. Curabitur faucibus erat sollicitudin nibh accumsan, et varius leo hendrerit. Vestibulum vel iaculis nibh. Aliquam quis eros est. Cras in tincidunt enim. </p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        {/* <div className="card card-margin6">
          <img className="card-img " src="https://i.imgur.com/HmsoAMll.png" alt="Card image" />
        </div> */}

        <div className="card card-margin3">
          <img className="card-img-top" src="https://i.imgur.com/mRrJTDY.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Lawn Mower for Sale </h5>
            <p className="card-text">Manual lawn mower for sale. $50 OBO. Contact Jack Miller.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div className="card text-left card-margin5">
          <div className="card-body">
            <h5 className="card-title">I will walk your dog!</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus iaculis felis ac ultricies. Curabitur faucibus erat sollicitudin nibh accumsan, et varius leo hendrerit. Vestibulum vel iaculis nibh. Aliquam quis eros est. Cras in tincidunt enim.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>



        <div className="card p-3 text-left card-margin7">
          <blockquote className="blockquote mb-0">

            <h4>Jordan's Blueberry Oatmeal Breakfast Supershake</h4>
            <h5>Yields 4 cups</h5>
            <h6>1/2 cup ice cubes</h6>
            <h6>2 very ripe bananas</h6>
            <h6>4 ounces fresh blueberries</h6>
            <h6>2 tablespoons peanut butter</h6>
            <h6>1/3 cup instant oatmeal/rolled oats</h6>
            <h6>1 cup milk</h6>
            <h6>2 scoops mixed berry ice cream (optional)</h6>
            <h6>2 tablespoons honey (optional)</h6>
            <p>Place all the ingredients into a blender and blitz on high speed for a few minutes. Serve with optional garnish of banana slices and some frozen blueberries with a drizzle of honey.</p>

            <footer className="blockquote-footer">
              <small className="text-muted">
                Recipe from Jordan MacVay<cite title="Source Title"></cite>
              </small>
            </footer>
          </blockquote>
        </div>


        <div className="card card-margin3">
          <img className="card-img-top" src="https://i.imgur.com/Q4EHISll.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Congrats to the Smith's on the birth of baby Jessica </h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus iaculis felis ac ultricies. Curabitur faucibus erat sollicitudin nibh accumsan, et varius leo hendrerit. Vestibulum vel iaculis nibh. </p>
            <p className="card-text"><small className="text-muted">Last updated 35 mins ago</small></p>
          </div>
        </div>


       {/* <div className="card card-margin8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div> */}
      </div>







        <Container className="container">
          <Row>
            <CardDeck className="card-deck">
              {postList}
            </CardDeck>
          </Row>
        </Container>
      </div>

      )
    
    };
    
    
    export default Posts;
    
