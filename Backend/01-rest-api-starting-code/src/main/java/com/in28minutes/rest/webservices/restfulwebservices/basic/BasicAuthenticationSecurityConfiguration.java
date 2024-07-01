package com.in28minutes.rest.webservices.restfulwebservices.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class BasicAuthenticationSecurityConfiguration {
	
	//FilterChain
	//Authenticate all requests
	//Basic Aithentication
	//Disabling CSRF
	//stateless rest API
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception
	{

		//Authenticate all requests
		http.authorizeHttpRequests(
				auth -> auth.anyRequest().authenticated()
		);
		
		//Basic Authentication
		http.httpBasic(Customizer.withDefaults());
		
		//stateless rest API
		http.sessionManagement(
				session -> session.sessionCreationPolicy
				(SessionCreationPolicy.STATELESS));
		
		//Disabling CSRF
		http.csrf().disable();
		
		return http.build();
	}
	
}
