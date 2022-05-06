package revature.model;

import lombok.Getter;

@Getter
public class SecurePassword {
    private String password;
    public SecurePassword(String password){
        this.password = encrypt(password);
    }
    private String encrypt(String password){
        int length = password.length();
        String newPassword ="";
        if(length<=10){
            char[] c = password.toCharArray();
            for(char i: c){
                newPassword = newPassword+(i*2);
            }
            System.out.println(newPassword);
           return stepOne(newPassword);
        }else{
            char[] c = password.toCharArray();
            for(char i: c){
                newPassword = newPassword+(i*5);
            }
            System.out.println(newPassword);
            return stepTwo(newPassword);
        }
    }
    private String stepOne(String password){
        char[] temp = password.toCharArray();
        String newPassword = "";
        for(char c: temp){
            newPassword+=Character.toString(c+10);
        }
        return newPassword;
    }
    private String stepTwo(String password){
        char[] temp = password.toCharArray();
        String newPassword = "";
        for(int i=0;i<temp.length;i+=3){
            newPassword +=Character.toString((temp[i]+temp[i+1])-15);
        }
        return newPassword;
    }

}
