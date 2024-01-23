# Cách cài Arch Linux Legacy
## 1. Setup mạng
Mạng dây thì k cần, còn wifi thì
```
iwctl
device list
```
chọn thiết bị để kết nối wifi

```
station wlan0 get-networks  (tự thay wlan0 nhé)
station wlan0 connect "tên wifi"
exit
```

`ping google.com` để kiểm tra

## 2. Setup thời gian theo mạng
```
timedatectl set-ntp true
```

## 3. Sắp xếp mirror (tùy chọn, không làm cũng được)
```
pacman -Sy reflector
reflector -c Vietnam -c Singapore -c Japan -c India -a 12 --sort rate --save /etc/pacman.d/mirrorlist
```

## 4. Phân vùng ổ đĩa
Dùng `cfdisk` để phân vùng, `lsblk` để kiểm tra ổ đĩa
- 1 phân vùng từ 1-16GB cho Linux swap
- 1 phân vùng cho Linux
- 1 phân vùng cho BIOS Boot
Ví dụ:
- /dev/sda1 - Linux swap
- /dev/sda2 - Linux
- /dev/sda3 - BIOS Boot

## 5. Format ổ đĩa
```
mkswap /dev/sda1 
swapon /dev/sda1
mkfs.ext4 /dev/sda2
```

## 6. Mount ổ đĩa
```
mount /dev/sda2 /mnt
```

## 7. Cài packages
```
pacstrap /mnt base base-devel linux linux-firmware linux-headers vim
```

## 8. Fstab
```
genfstab -U /mnt >> /mnt/etc/fstab
```

## 9. Chroot
```
arch-chroot /mnt
```

## 10. Cài đặt thời gian, vùng
```
ln -sf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime
hwclock --systohc
vim /etc/locale.gen
```

Uncomment: `en_US.UTF-8 UTF-8`

```
locale-gen
```

```
echo LANG=en_US.UTF-8 >> /etc/locale.conf
```

## 11. Hostname
```
echo archlinux >> /etc/hostname (Co the thay archlinux bang ten hostname ban muon)
vim /etc/hosts
```

```
127.0.0.1   localhost
::1     localhost
127.0.1.1   archlinux.localdomain   archlinux
```

## 12. Tạo mật khẩu cho root
```
passwd
```

## 13. Tạo tài khoản người dùng
```
useradd -m penguin  (thay penguin bằng tên ng dùng bạn muốn)
passwd penguin
usermod -aG wheel,audio,video,optical,storage,power penguin
EDITOR=vim visudo
```

Thêm: `penguin ALL=(ALL) ALL` sau `root ALL=(ALL:ALL) ALL`
Uncomment: `%wheel ALL=(ALL) ALL`

## 14. Cài bootloader
```
pacman -S grub networkmanager
systemctl enable NetworkManager
grub-install /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg
```

## 15. Khởi động lại
```
exit
umount -R /mnt
reboot
```

Hướng dẫn này chưa bao gồm cách cài giao diện người dùng, nếu bạn muốn sử dụng 1 giao diện đồ họa đơn giản, bạn có thể thử [penguinRice](https://github.com/p3nguin-kun/penguinRice)
