package controller;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.event.annotation.BeforeTestClass;
import revature.controller.UserController;
import revature.service.CustomerService;

@WebMvcTest(UserController.class)
public class CustomerControllerTest {

    @MockBean()
    private CustomerService customerService;

    @BeforeTestClass

    @Test
    public void testSignIn(){

    }
}
