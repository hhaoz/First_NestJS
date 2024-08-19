import { Injectable } from '@nestjs/common';
import { Profile } from 'src/models/profile.model';

@Injectable()
export class ProfileService {

    profiles: Profile[] = [
        {
            id: '03643',
            name: 'Trinh Tu Hao',
            email: 'hhaoz@gmail.com',
            phone: '0123456789',
            dob: '04/08/2004',
            linkFb: 'https://www.facebook.com/tuhao.trinh.90',
            avatar: 'https://scontent.fsgn7-2.fna.fbcdn.net/v/t39.30808-1/426490608_885506643073678_2258876277235770241_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=cAy5MnMiLj4Q7kNvgFMJHMw&_nc_ht=scontent.fsgn7-2.fna&oh=00_AYAHtJQB2m6crUdiJq4c_qxa4_NtUhtvg1B5oKPDbBHDDg&oe=66C5057E'
        },
        {
          id: '02147',
          name: 'Nguyen Huy Bo',
          email: 'bobao@gmail.com',
          phone: '0123456789',
          dob: '29/02/2004',
          linkFb: 'https://www.facebook.com/profile.php?id=100017384024690',
          avatar: 'https://scontent.fsgn7-2.fna.fbcdn.net/v/t39.30808-1/418487999_1439018040020983_7268759800819454883_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=xBPaNWti5DsQ7kNvgF8CCbR&_nc_ht=scontent.fsgn7-2.fna&oh=00_AYBpGbB4ulYaFZ1DiG9HqNbPHE3zufx95CBEY91TrfbLjQ&oe=66C4E88D'
        }
    ]

    getById(id: string) {
        let profile = this.profiles.find(profile => profile.id === id);
        if (profile) {
          return profile;
        }
          return 'Khong tim thay profile';
        
      }
    
      getAll(): Profile[] {
        return this.profiles;
      }

    createProfile(profile: Profile): Profile[] {
        this.profiles.push(profile);
        return this.profiles
    }

    deleteProfile(id: string): Profile[] | string {
        let index = this.profiles.findIndex((profile) => profile.id === id);
        if(index !== -1) {
            this.profiles.splice(index, 1)
            return this.profiles
        }
        return "Không tìm thấy profile để xoá"
    }

    updateProfile(id: string, profile: Profile): Profile[] | string {
        let index = this.profiles.findIndex((profile) => profile.id === id);
        if(index !== -1) {
            this.profiles[index] = profile
            return this.profiles
        }
        return "Không tìm thấy profile để cập nhật"
    }
}
