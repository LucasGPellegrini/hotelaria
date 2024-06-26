package com.projeto.hotelaria.controller;

import com.projeto.hotelaria.model.Usuario;
import com.projeto.hotelaria.service.UsuarioService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuariosController {

    UsuarioService usuarioService;

    public UsuariosController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping
    public String criaUsuario(@RequestBody Usuario usuario) {
        return usuarioService.criaUsuario(usuario);
    }

    @GetMapping("{cpf}")
    public Usuario pegaUsuario(@PathVariable("cpf") String cpf) {
        return usuarioService.pegaUsuario(cpf);
    }

    @GetMapping()
    public List<Usuario> pegaTodosUsuarios() {
        return usuarioService.pegaTodosUsuarios();
    }

    @PutMapping("{usuario}")
    public String editaUsuario(@RequestBody Usuario usuario) {
        return usuarioService.editaUsuario(usuario);
    }

    @DeleteMapping("{cpf}")
    public String removeUsuario(String cpf) {
        return usuarioService.removeUsuario(cpf);
    }
}
