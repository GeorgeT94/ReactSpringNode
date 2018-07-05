package web.app.accounts.Database;




import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity

public class Employee {

    private @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    int id;
    private String firstName;
    private String surname;
    private int accountNumber;

    public Employee(int id, String firstName, String surname, int accountNumber) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.surname = surname;
        this.accountNumber = accountNumber;
    }

    public Employee(String firstName, String surname, int accountNumber) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.surname = surname;
        this.accountNumber = accountNumber;
    }
    public Employee(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }
}