<script lang="ts" setup>
import { IconUser, IconCalendarSmile, IconMapPin, IconPhone, IconMail, IconPencil } from '@tabler/icons-vue';

const dateOfJoining = 2021;
const currentYear = new Date().getFullYear();

const myCareerYear = currentYear - dateOfJoining + 1;

const basicInfo = ref([
  {
    icon: IconUser,
    infoKey: 'name',
    infoLabel: '이름',
    infoValue: '백종민'
  },
  {
    icon: IconCalendarSmile,
    infoKey: 'dateOfBirth',
    infoLabel: '생년월일',
    infoValue: '96.12.03'
  },
  {
    icon: IconMapPin,
    infoKey: 'address',
    infoLabel: '주소',
    infoValue: '경상남도 김해시'
  },
  {
    icon: IconPhone,
    infoKey: 'phoneNumber',
    infoLabel: '연락처',
    infoValue: '010-2585-0185'
  },
  {
    icon: IconMail,
    infoKey: 'email',
    infoLabel: '이메일',
    infoValue: 'devmini1203@gmail.com'
  },
  {
    icon: IconPencil,
    infoKey: 'education',
    infoLabel: '학력',
    infoValue: '동의대학교',
    infoSubValue: '(정보통신공학과)'
  }
]);

const elementsStore = useElementsStore();
const aboutMe = ref<HTMLElement | null>(null);
onMounted(() => {
  elementsStore.aboutMeRef = aboutMe.value;
});
</script>

<template>
  <div class="about-me-container" ref="aboutMe">
    <div class="about-me-content-box">
      <div class="title-box">
        <span class="title"> ABOUT ME </span>
      </div>

      <el-row>
        <el-col class="basic-info-content-box" :span="8" :xl="8" :lg="8" :md="12" :sm="24" :xs="24" v-for="info in basicInfo" :key="info.infoKey">
          <div class="basic-info-wrapper">
            <div>
              <component :is="info.icon" class="icon" />
            </div>
            <div class="text-box">
              <div class="label">{{ info.infoLabel }}</div>

              <div class="value" v-if="info.infoSubValue">
                {{ info.infoValue }}
                <br />
                {{ info.infoSubValue }}
              </div>
              <div class="value" v-else>{{ info.infoValue }}</div>
            </div>
          </div>
        </el-col>
      </el-row>

      <div class="my-introduction-content-box">
        <div class="my-profile-img-box">
          <NuxtImg class="img" src="/img/aboutme/profile_image.jpg" provider="myProvider" />
        </div>

        <div class="my-story-text-box">
          <div class="title-box">포기하지않고 끈질기게</div>
          <br />
          <div class="text-box">
            반갑습니다. 햇수로 {{ myCareerYear }}년차 프론트엔드 개발자 백종민 입니다! <br /><br />
            저는 현재 부산 소재의 한 중견 기업 전산실에서 보람차고 뿌듯한 하루하루를 보내고 있습니다.
            <br />
            현재 재직중인 회사는 제가 입사할 때 각종 레거시한 프로젝트들을 걷어내고 최신 웹 기술을 적용하는 과도기 였고 이를 위해, 채택한 프레임워크는 Vue2
            였으며 이것이 프론트엔드 개발자로서 접한 첫 프레임워크였습니다.
            <br /><br />
            저는 지금까지 다양한 프로젝트를 개발 및 유지보수해왔고
            <br />
            그 과정에서 Vue3를 포함하여 Nuxt 등 다양한 JavaScript 프레임워크를 익히게 되었으며 BootstrapVue, Vuetify, ElementPlus 등의 다양한 UI 프레임워크도
            경험하게 되었습니다
            <br /><br />
            현재는 SpringBoot와 PL/SQL을 통한 백엔드 개발도 함께 맡아 하고 있습니다!

            <br /><br />
            입사 후 곧장 프로젝트에 투입되어 개발을 진행하며 수 많은 시행착오와 어려움이 있었습니다.
            <br />
            다양한 프로젝트를 진행해오며 남들보다 모자란 실력에 주눅이 들기도 했고 반대로 그것에 동기부여가 되었던 적도 있었습니다.
            <br />
            가끔은 쉽게 구현되지 않는 기능과 화면들에 좌절도 했지만 조금은 느리더라도 포기하지 않고 노력해 결국 구현해왔습니다.
            <br /><br />
            앞으로도 개발 중 어떠한 어려움에도 포기하지 않고 끈질기게 매달려 내가 구현하고자 하는 것을 결국은 구현해내는 개발자로 성장해갈 것 입니다.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
