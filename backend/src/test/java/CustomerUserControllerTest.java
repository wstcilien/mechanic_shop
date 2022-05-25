import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import revature.controller.UserController;
import revature.service.CustomerService;

@WebMvcTest(UserController.class)
public class CustomerUserControllerTest {

    @MockBean()
    private CustomerService customerService;

    @Test
    public void testSignIn(){

    }
}
