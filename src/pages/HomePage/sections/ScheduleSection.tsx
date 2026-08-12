import { motion } from 'framer-motion';
import { CalendarClock } from 'lucide-react';
import { MOCK_SCHEDULE, SUBJECT_COLORS } from '@/data/schedule';

const TIME_SLOTS = [
  { label: '早读', period: '早自习' },
  { label: '第1节', period: '08:00-08:45' },
  { label: '第2节', period: '08:55-09:40' },
  { label: '第3节', period: '10:00-10:45' },
  { label: '第4节', period: '10:55-11:40' },
  { label: '第5节', period: '14:00-14:45' },
  { label: '第6节', period: '14:55-15:40' },
  { label: '第7节', period: '15:50-16:35' },
  { label: '晚自习', period: '19:00-21:00' },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-10"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Schedule
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">本周课程表</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            <CalendarClock className="size-4" />
            2026-2027学年 第一学期 · 第8周 · 10月26日 - 10月30日
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border/50 bg-card shadow-sm overflow-hidden"
        >
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-gradient-to-r from-primary/10 to-accent/10">
                  <th className="py-3 px-4 text-left font-semibold text-foreground w-24 whitespace-nowrap">
                    时间
                  </th>
                  {MOCK_SCHEDULE.map((d) => (
                    <th
                      key={d.day}
                      className="py-3 px-2 text-center font-semibold text-foreground"
                    >
                      {d.day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* 早读 */}
                <tr className="border-t border-border/50">
                  <TimeSlot label={TIME_SLOTS[0].label} period={TIME_SLOTS[0].period} />
                  {MOCK_SCHEDULE.map((d) => (
                    <SubjectCell key={`${d.day}-mr`} item={d.morningReading} />
                  ))}
                </tr>
                {/* 上午 */}
                {[0, 1, 2, 3].map((idx) => (
                  <tr key={`am-${idx}`} className="border-t border-border/30">
                    <TimeSlot label={TIME_SLOTS[idx + 1].label} period={TIME_SLOTS[idx + 1].period} />
                    {MOCK_SCHEDULE.map((d) => (
                      <SubjectCell key={`${d.day}-am${idx}`} item={d.morning[idx]} />
                    ))}
                  </tr>
                ))}
                {/* 午休分隔 */}
                <tr className="bg-muted/30">
                  <td
                    colSpan={6}
                    className="py-2 text-center text-xs text-muted-foreground"
                  >
                    午 休 · 11:50 - 13:50
                  </td>
                </tr>
                {/* 下午 */}
                {[0, 1, 2].map((idx) => (
                  <tr key={`pm-${idx}`} className="border-t border-border/30">
                    <TimeSlot label={TIME_SLOTS[idx + 5].label} period={TIME_SLOTS[idx + 5].period} />
                    {MOCK_SCHEDULE.map((d) => (
                      <SubjectCell key={`${d.day}-pm${idx}`} item={d.afternoon[idx]} />
                    ))}
                  </tr>
                ))}
                {/* 晚自修分隔 */}
                <tr className="bg-muted/30">
                  <td
                    colSpan={6}
                    className="py-2 text-center text-xs text-muted-foreground"
                  >
                    放 学 · 16:45 - 18:30
                  </td>
                </tr>
                {/* 晚自习 */}
                <tr className="border-t border-border/30">
                  <TimeSlot label={TIME_SLOTS[8].label} period={TIME_SLOTS[8].period} />
                  {MOCK_SCHEDULE.map((d) => (
                    <SubjectCell key={`${d.day}-ev`} item={d.eveningStudy} dimmed />
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-wrap gap-2 justify-center"
        >
          {Object.entries(SUBJECT_COLORS).map(([subject, colors]) => (
            <span
              key={subject}
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors}`}
            >
              {subject}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TimeSlot({ label, period }: { label: string; period: string }) {
  return (
    <td className="py-3 px-4 font-medium text-foreground bg-muted/20 w-24 whitespace-nowrap">
      <div>{label}</div>
      <div className="text-xs text-muted-foreground font-normal">{period}</div>
    </td>
  );
}

function SubjectCell({
  item,
  dimmed = false,
}: {
  item: { subject: string; teacher: string };
  dimmed?: boolean;
}) {
  const colorClass = SUBJECT_COLORS[item.subject] ?? 'bg-slate-100 text-slate-700';
  return (
    <td className={`py-2 px-2 text-center ${dimmed ? 'opacity-70' : ''}`}>
      <div
        className={`inline-flex flex-col items-center justify-center w-full py-2 px-1 rounded-lg ${colorClass} transition-transform hover:scale-105`}
      >
        <span className="font-semibold">{item.subject}</span>
        <span className="text-[10px] opacity-70">{item.teacher}</span>
      </div>
    </td>
  );
}
