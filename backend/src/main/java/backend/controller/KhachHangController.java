    package backend.controller;

    import backend.domain.KhachHang;
    import backend.repository.KhachHangRepository;
    import backend.service.AuthenticationServices;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.ResponseEntity;
    import org.springframework.security.crypto.password.PasswordEncoder;
    import org.springframework.stereotype.Controller;
    import org.springframework.ui.Model;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestBody;
    import org.springframework.web.bind.annotation.RequestParam;

    import java.util.HashMap;
    import java.util.Map;

    @Controller
    public class KhachHangController {
        @Autowired
        private AuthenticationServices authenticationServices;
        @Autowired
        private PasswordEncoder passwordEncoder;
        @Autowired
        private KhachHangRepository khachHangRepository;
        @GetMapping("/req/login")
        public String login() {
            return "login";
        }

        @GetMapping("/req/signup")
        public String signup() {
            return "signup";
        }

        @GetMapping("/index")
        public String home() {
            return "index";
        }

        @PostMapping("/req/login")
        public String login(@RequestParam("username") String username,
                            @RequestParam("password") String password,
                            Model model) {
            if (username.isEmpty() || password.isEmpty()) {
                model.addAttribute("error", "Username and password are required");
                return "login";  // Trả lại trang login nếu thông tin không hợp lệ
            }
            boolean login = authenticationServices.login(username, password);
            if (login) {
                return "redirect:/";
            } else {
                model.addAttribute("error", "Invalid username or password");  // Thông báo lỗi nếu đăng nhập thất bại
                return "login";
            }

        }
        @PostMapping(value = "/req/signup", consumes = "application/json")
        public ResponseEntity<Map<String, String>> createKhachhang(@RequestBody KhachHang khachHang) {
            Map<String, String> response = new HashMap<>();

            if (khachHang.getMatKhau() == null) {
                response.put("error", "Password cannot be null");
                return ResponseEntity.badRequest().body(response);
            }

            boolean check = authenticationServices.signup(khachHang.getTen());
            if (check) {
                response.put("error", "Ten already exited.");
                return ResponseEntity.badRequest().body(response);
            } else {
                String encodedPassword = passwordEncoder.encode(khachHang.getMatKhau());
                khachHang.setMatKhau(encodedPassword);

                khachHangRepository.save(khachHang);

                response.put("message", "/endpoints/req/login");
                return ResponseEntity.ok(response);
            }
        }

    }
