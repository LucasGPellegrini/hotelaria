package com.projeto.hotelaria.service.impl;

import com.projeto.hotelaria.model.Usuario;
import com.projeto.hotelaria.repository.UsuarioRepository;
import com.projeto.hotelaria.service.UsuarioService;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    UsuarioRepository usuarioRepository;

    public UsuarioServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public String criaUsuario(Usuario usuario) {
        if (verificaCpf(usuario.getCpf())) {
            usuarioRepository.save(usuario);
            return "usuario criado";
        }

        return "cpf invalido";
    }

    @Override
    public String removeUsuario(String cpf) {
        usuarioRepository.deleteById(cpf);
        return "usuario removido";
    }

    @Override
    public String editaUsuario(Usuario usuario) {
        if (verificaCpf(usuario.getCpf())) {
            usuarioRepository.save(usuario);
            return "usuario editado";
        }

        return "cpf invalido";
    }

    @Override
    public Usuario pegaUsuario(String cpf) {
        return usuarioRepository.findById(cpf).get();
    }

    @Override
    public List<Usuario> pegaTodosUsuarios() {
        return usuarioRepository.findAll();
    }

    private boolean verificaCpf(String cpf) {
        Pattern pattern = Pattern.compile(
                "[0-9][0-9][0-9].[0-9][0-9][0-9].[0-9][0-9][0-9]-[0-9][0-9]"
        );
        Matcher matcher = pattern.matcher(cpf);

        return matcher.find();
    }
}
