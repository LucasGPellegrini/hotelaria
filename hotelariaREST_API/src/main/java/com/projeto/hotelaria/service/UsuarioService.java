package com.projeto.hotelaria.service;

import com.projeto.hotelaria.model.Usuario;

import java.util.List;

public interface UsuarioService {
    public String criaUsuario(Usuario usuario);
    public String removeUsuario(String cpf);
    public String editaUsuario(Usuario usuario);
    public Usuario pegaUsuario(String cpf);
    public List<Usuario> pegaTodosUsuarios();
}
