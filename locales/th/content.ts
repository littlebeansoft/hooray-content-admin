const content = {
  title: {
    main: 'รายวิชา',
    detail: 'รายละเอียดรายวิชา',
  },
  table: {
    column: {
      courseName: 'ชื่อรายวิชา',
      studying: 'กำลังเรียน',
      complete: 'สำเร็จรายวิชา',
      allLearner: 'ผู้เรียนทั้งหมด',
      preTest: 'ทดสอบก่อนเรียน (Pre-Test)',
      postTest: 'ทดสอบหลังเรียน (Post-Test)',
      courseTest: 'ทดสอบระหว่างเรียน (Formative-Test)',
      status: 'สถานะ',
      beforeLearn: 'ก่อนเรียน',
      afterLearn: 'หลังเรียน',
    },
    button: {
      search: 'ค้นหา',
      export: 'ดาวน์โหลดเอกสาร',
      addCourse: 'เพิ่มรายวิชา',
      action: 'ตัวเลือก',
      editCourse: 'แก้ไขรายวิชา',
      editTest: 'แก้ไขข้อสอบ',
    },
  },
  modal: {
    title: 'เพิ่มรายวิชา',
    body: {
      name: 'ชื่อ',
      category: 'สาระการเรียนรู้',

      tag: 'แท็ก',
    },
    button: {
      addCourse: 'เพิ่มรายวิชา',
    },
  },
  card: {
    approval: 'การอนุมัติ',
    name: 'ชื่อ',
    courseKey: 'รหัสรายวิชา',
    tag: 'แท็ก',
    caption: 'คำบรรยาย',
    credit: 'หน่วยกิต',
    cover: 'หน้าปก',
    coverWithSize: 'หน้าปก แนวนอน {{size}}',
    coverType: { label: 'รูปแบบหน้าปก', option: { image: 'รูปภาพ', video: 'วีดีโอ' } },
    thumbnail: 'รูปขนาดย่อ',
    detail: 'รายละเอียด',
    objective: 'วัตถุประสงค์',
    form: 'แบบประเมิน',
    required: 'รายวิชาที่จำเป็น',
    category: 'สาระการเรียนรู้',
    skipLesson: 'ข้ามบทเรียน',
    haveCertificate: 'พิมพ์ใบรับรอง',
    status: 'สถานะ',
    remark: 'หมายเหตุ',
    button: {
      delete: 'ลบรายวิชา',
      preview: 'ดูตัวอย่างรายวิชา',
    },
  },
  form: {
    remarkReq: 'กรุณาระบุเหตุผลการยกเลิก',
    updateSuccess: 'อัพเดตรายวิชาสำเร็จแล้ว',
    approveSuccess: 'อนุมัติรายวิชาเรียบร้อยแล้ว',
    createSuccess: 'สร้างรายวิชาสำเร็จ',
    updateFailed: 'อัพเดตรายวิชาไม่สำเร็จ',
  },
}
export default content
