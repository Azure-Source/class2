import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star, Sparkles, GraduationCap } from 'lucide-react';
import { MOCK_STUDENTS } from '@/data/students';
import { MOCK_TEACHERS } from '@/data/teachers';
import Image from '@/components/ui/image';

export default function MembersSection() {
  const classLeaders = useMemo(
    () => MOCK_STUDENTS.filter((s) => s.isClassLeader),
    []
  );
  const classmates = useMemo(
    () => MOCK_STUDENTS.filter((s) => !s.isClassLeader),
    []
  );

  return (
    <section id="members" className="w-full py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Class Members
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">班级成员</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            45名性格各异的少年少女，组成了这个独一无二的二班集体
          </p>
        </motion.div>

        <Tabs defaultValue="classmates" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10">
            <TabsTrigger value="classmates">同学展示</TabsTrigger>
            <TabsTrigger value="leaders">班委团队</TabsTrigger>
            <TabsTrigger value="teachers">任课老师</TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="classmates" key="classmates">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
              >
                {classmates.map((s, i) => (
                  <StudentCard key={s.id} student={s} index={i} />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="leaders" key="leaders">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
              >
                {classLeaders.map((s, i) => (
                  <StudentCard key={s.id} student={s} index={i} isLeader />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="teachers" key="teachers">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
              >
                {MOCK_TEACHERS.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="relative p-5 rounded-2xl bg-card border border-border/50 shadow-sm text-center group"
                  >
                    {t.isHeadTeacher && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="default" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-[10px]">
                          <Star className="size-3 mr-1" />
                          班主任
                        </Badge>
                      </div>
                    )}
                    <div className="size-16 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                      <Image
                        src={t.imageUrl}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <GraduationCap className="size-3.5 text-primary" />
                      <h4 className="font-semibold text-foreground">{t.name}</h4>
                    </div>
                    <p className="text-xs text-primary font-medium mb-2">{t.subject}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {t.teachingStyle}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}

function StudentCard({
  student,
  index,
  isLeader = false,
}: {
  student: (typeof MOCK_STUDENTS)[number];
  index: number;
  isLeader?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={`relative p-5 rounded-2xl border shadow-sm text-center group transition-all ${
        isLeader
          ? 'bg-gradient-to-br from-primary/5 via-card to-accent/5 border-primary/20 hover:border-primary/40'
          : 'bg-card border-border/50 hover:border-border'
      }`}
    >
      {isLeader && student.position && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2">
          <Badge variant="default" className="bg-gradient-to-r from-primary to-accent text-white border-0 text-[10px] px-2">
            <Sparkles className="size-3 mr-1" />
            {student.position}
          </Badge>
        </div>
      )}
      <div className={`size-16 mx-auto mb-3 rounded-full overflow-hidden ring-2 transition-all mt-4 ${isLeader ? 'ring-primary/40 group-hover:ring-primary' : 'ring-border group-hover:ring-primary/40'}`}>
        <Image
          src={student.imageUrl}
          alt={student.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-semibold text-foreground">{student.name}</h4>
      <p className="text-xs text-muted-foreground mb-2">{student.constellation}</p>
      <p className="text-xs text-muted-foreground mb-2">
        <span className="text-primary font-medium">爱好：</span>
        {student.hobbies}
      </p>
      <div className="pt-2 border-t border-border/50">
        <p className="text-xs text-foreground/70 italic line-clamp-2">
          "{student.motto}"
        </p>
      </div>
    </motion.div>
  );
}
