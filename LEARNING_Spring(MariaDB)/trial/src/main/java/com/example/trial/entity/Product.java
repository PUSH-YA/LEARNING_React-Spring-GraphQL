package com.example.trial.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
// don't have to implement getter and setter manually
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "PRODUCT_TBL") // will create its own table w class
public class Product {
    @Id
    @GeneratedValue // auto generate id
    private int id;
    private String name;
    private int quantity;
    private double price;
}
