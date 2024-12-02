package backend.service;

import backend.domain.KhachHang;
import backend.repository.KhachHangRepository;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;



@Service
@AllArgsConstructor
public class KhachHangService implements UserDetailsService {
    @Autowired
   private KhachHangRepository khachHangRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<KhachHang> user = khachHangRepository.findByTen(username);
        if(user.isPresent()) {
            var userObj = user.get();
            return User.builder()
                    .username(userObj.getTen())
                    .password(userObj.getMatKhau())
                    .build();
        }else {
            throw new UsernameNotFoundException(username);

        }
    }



}
