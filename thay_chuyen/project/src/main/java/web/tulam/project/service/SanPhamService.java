package web.tulam.project.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import web.tulam.project.entity.SanPham;
import web.tulam.project.repo.SanPhamRepo;

import java.io.File;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class SanPhamService {
    @Autowired
    private SanPhamRepo sanPhamRepo;
    @Value("${images.location}")
    private String imagesLocation;

    public Page<SanPham> getAllSanPhams(int page, int size) {
        return sanPhamRepo.findAll(PageRequest.of(page, size, Sort.by("tenSanPham")));
    }

    public SanPham getSanPham(String id) {
        return sanPhamRepo.findById(id).orElseThrow(() -> new RuntimeException("SanPham not found"));
    }

    public SanPham createSanPham(SanPham contact) {
        return sanPhamRepo.save(contact);
    }

    public SanPham putSanPham( String id, SanPham sanPham){
        Optional<SanPham> sanPham1 = sanPhamRepo.findById(id);
        if(sanPham1.isPresent()){
            SanPham updatedSanPham = sanPham1.get();
            updatedSanPham.setTenSanPham(sanPham.getTenSanPham());
            updatedSanPham.setMoTa(sanPham.getMoTa());
            updatedSanPham.setSoLuong(sanPham.getSoLuong());
            updatedSanPham.setThuongHieu(sanPham.getThuongHieu());
            updatedSanPham.setHinhAnhUrl(sanPham.getHinhAnhUrl());
            updatedSanPham.setGia(sanPham.getGia());
            updatedSanPham.setSoLuongThat(sanPham.getSoLuongThat());
            updatedSanPham.setLinkYoutube(sanPham.getLinkYoutube());

            return sanPhamRepo.save(updatedSanPham);
        }else {
            throw new RuntimeException("sai o put sanphamService voi id la" + id);
        }
    }

public List<SanPham> getSanPhamByTen(String tenSanPham){
        List<SanPham> sanPhams = sanPhamRepo.getSanPhamByTenSanPham(tenSanPham);
        if(sanPhams.isEmpty()){
            throw new RuntimeException("ko co san pham ten nay");
        }
        return  sanPhams;
}

    public List<SanPham> getSanPhamByThuongHieu(String thuongHieu){
        List<SanPham> sanPhams = sanPhamRepo.getSanPhamByThuongHieu(thuongHieu);
        if (sanPhams.isEmpty()) {
            throw new RuntimeException("No products found for the given brand: " + thuongHieu);
        }
        return sanPhams;

    }

    @Value("${images.location}")
    public File getImageFile(String imageName) {
        // Kết hợp đường dẫn với tên file để tạo ra file đầy đủ
        File imageFile = new File(imagesLocation + "/" + imageName);

        // Kiểm tra nếu file tồn tại
        if (imageFile.exists()) {
            return imageFile;
        } else {
            return null; // File không tồn tại
        }
    }



}
