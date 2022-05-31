package revature.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import revature.model.Comments;
import revature.model.Product;
import revature.repository.CommentRepository;

import java.util.List;

@Component
public class CommentService {
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    ProductService productService;
    public CommentService(CommentRepository commentRepository){
        this.commentRepository = commentRepository;
    }

    public Boolean postComment(Comments comments, int productId){
        Product product = productService.findById(productId);
        if(product!=null){
            Comments c = commentRepository.getByProductIdAndUsername(productId,comments.getCustomerUsername());
            if(c!=null){
                return false;
            }else{
                comments.setProduct(product);
                commentRepository.save(comments);
                return true;
            }
        }else{
            return false;
        }

    }
}
