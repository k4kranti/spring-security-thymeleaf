package com.sara.security.client.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class HomeController {

    @GetMapping("/home")
    public ModelAndView home(){
        return new ModelAndView("home");
    }
}
