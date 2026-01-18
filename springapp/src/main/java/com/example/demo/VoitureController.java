package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/voitures")
@CrossOrigin(origins = "http://localhost:3000")
public class VoitureController {

    private final VoitureRepo voitureRepo;

    public VoitureController(VoitureRepo voitureRepo) {
        this.voitureRepo = voitureRepo;
    }

    @GetMapping
    public List<Voiture> getAllVoitures() {
        return (List<Voiture>) voitureRepo.findAll();
    }

    @PostMapping
    public Voiture saveVoiture(@RequestBody Voiture voiture) {
        return voitureRepo.save(voiture);
    }
}
