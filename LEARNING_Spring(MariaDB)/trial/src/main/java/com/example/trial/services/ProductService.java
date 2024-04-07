package com.example.trial.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.trial.repository.ProductRepository;
import com.example.trial.entity.Product;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;
    
    // POST methods
    public Product saveProduct(Product product){
        return repository.save(product);
    }

    public List<Product> saveProducts(List<Product> products){
        return repository.saveAll(products);
    }

    // GET methods
    public Product getProductById(int Id){
        // find by Id only returns Optional<Product>
        return repository.findById(Id).orElse(null);
    }

    public List<Product> getProducts(){
        return repository.findAll();
    }

    public Product getProductByName(String name){
        return repository.findByName(name);
    }

    // DELETE method
    public String deleteProduct(int id){
        repository.deleteById(id);
        return "product removed!" + id;
    }

    // UPDATE method
    public Product updateProduct(Product product){
        // ensure it is an existing product
        Product existingProduct = repository.findById(product.getId()).orElse(null);
        existingProduct.setName(product.getName());
        existingProduct.setQuantity(product.getQuantity());
        existingProduct.setPrice(product.getPrice());
        return repository.save(existingProduct);
    }
}
