package web.app.accounts.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import web.app.accounts.Constants.Routes;
import web.app.accounts.Database.Employee;
import web.app.accounts.Database.EmployeeRepository;
import org.springframework.web.bind.annotation.CrossOrigin;


@Controller
@RequestMapping(path = Routes.HOME)
public class DBcontroller {
    @Autowired
    private EmployeeRepository employeeRepository;

    @CrossOrigin(origins = Routes.ALLOWED_ORIGIN)
    @PostMapping(path=Routes.ADD)
    public @ResponseBody String addNewUser (@RequestBody Employee employee) {
        employeeRepository.save(employee);
        return "Saved";
    }

    @CrossOrigin(origins = Routes.ALLOWED_ORIGIN)
    @DeleteMapping(path=Routes.DELETE)
    public @ResponseBody String deleteUser(@RequestBody Employee employee){
        employeeRepository.delete(employee);
        return "deleted";
    }

    @CrossOrigin(origins =Routes.ALLOWED_ORIGIN)
    @GetMapping(path=Routes.GET_ALL)
    public @ResponseBody Iterable<Employee> getAllUsers() {
        return employeeRepository.findAll();
    }
}
